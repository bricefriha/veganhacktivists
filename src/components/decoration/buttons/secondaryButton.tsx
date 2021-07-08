import BaseButton from "./baseButton";
import { ButtonProps } from "./buttons";

//TODO: define secondary button classes

const SecondaryButton: React.FC<ButtonProps> = (props) => {

    const {
        linkUrl
    } = props;
  
    return (
        <BaseButton linkUrl={linkUrl}>
            <a>
                <div className="bg-fuchsia hover:bg-strawberry border-l-8 border-strawberry py-2 transition-transform">
                    {props.children}
                </div>
            </a>
        </BaseButton>
    );
};
  
export default SecondaryButton;