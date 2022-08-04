import { DarkButton, ExternalLinkButton } from 'components/decoration/buttons';
import { trpc } from 'lib/client/trpc';

import PlaygroundRequestCard from 'components/layout/playground/requestCard';

import ApplicationCard from 'components/layout/playground/applicationCard';

import type { PlaygroundApplication } from '@prisma/client';
import type { NextPage } from 'next';

const AdminPage: NextPage = ({}) => {
  const { queryClient } = trpc.useContext();

  const { data, isSuccess } = trpc.useQuery([
    'playground.admin.requestsWithPendingApplications',
  ]);

  const { mutate, isLoading: isMutationLoading } = trpc.useMutation(
    ['playground.admin.setApplicationStatus'],
    {
      onMutate: async ({ id }) => {
        await queryClient.cancelQueries([
          'playground.admin.requestsWithPendingApplications',
        ]);
        const previousApplications = queryClient.getQueryData<
          PlaygroundApplication[]
        >(['playground.admin.requestsWithPendingApplications']);

        queryClient.setQueryData<PlaygroundApplication[]>(
          ['playground.admin.requestsWithPendingApplications'],
          (oldApplications = []) =>
            oldApplications?.filter((old) => old.id !== id)
        );

        return { previousApplications };
      },
      onError: (error, variables, context) => {
        queryClient.setQueryData(
          ['playground.admin.requestsWithPendingApplications'],
          context?.previousApplications
        );
      },
      onSettled: () => {
        void queryClient.invalidateQueries([
          'playground.admin.requestsWithPendingApplications',
        ]);
      },
    }
  );

  if (!isSuccess) return null;
  return (
    <div>
      <DarkButton href="/playground/admin" className="m-10 mx-auto w-fit">
        See requests
      </DarkButton>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {data.map((request) => (
          <div key={request.id}>
            <div className="max-w-xl h-ful">
              <PlaygroundRequestCard request={request}>
                <div className="pt-5 mt-10 text-xl font-bold border-b">
                  Applications
                </div>
                <div className="flex flex-col gap-5 divide-y">
                  {request.applications.map((app) => (
                    <ApplicationCard key={app.id} application={app}>
                      <div className="grid justify-center grid-cols-2 gap-5">
                        <DarkButton
                          disabled={isMutationLoading}
                          onClick={() => {
                            mutate({ id: request.id, status: 'Accepted' });
                          }}
                        >
                          Accept
                        </DarkButton>
                        <ExternalLinkButton
                          className="px-4 text-xl text-grey-dark"
                          disabled={isMutationLoading}
                          onClick={() => {
                            mutate({ id: request.id, status: 'Rejected' });
                          }}
                        >
                          Deny
                        </ExternalLinkButton>
                      </div>
                    </ApplicationCard>
                  ))}
                </div>
              </PlaygroundRequestCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
