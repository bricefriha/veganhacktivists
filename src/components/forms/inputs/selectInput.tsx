import { useState, useEffect } from 'react';
import getThemeColor from '../../../lib/helpers/theme';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import type { ThemeConfig } from 'react-select/dist/declarations/src/theme';
import React from 'react';
import type StateManagedSelect from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

interface SelectInputProps {
  id?: string;
  name?: string;
  error?: string;
  options: OptionType[];
  creatable?: boolean;
  defaultValue?: OptionType['value'];
  onChange?: (value: OptionType['value'] | null) => void;
  placeholder?: string;
}

const SelectInput = React.forwardRef<StateManagedSelect, SelectInputProps>(
  (
    { error, options, creatable = false, defaultValue = null, ...props },
    ref
  ) => {
    const grey = getThemeColor('grey');
    const lightGrey = getThemeColor('grey-light');
    const red = getThemeColor('red');

    const [allOptions, setAllOptions] = useState(options);
    const [value, setValue] = useState<string | null>(defaultValue);

    useEffect(() => {
      props.onChange?.(value);
    }, [props, value]);

    const height = '44px';

    const theme: ThemeConfig = (theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: grey,
        primary25: lightGrey,
        secondary: lightGrey,
      },
    });

    const styles: Partial<
      StylesConfig<{ label: string; value: string }, false>
    > = {
      placeholder: (provided) => ({
        ...provided,
        color: '#a1a1aa',
      }),
      singleValue: (provided) => ({
        ...provided,
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        backgroundColor: grey,
        height,
        verticalAlign: 'middle',
        marginTop: 'auto',
        marginBottom: 'auto',
      }),
      control: (provided) => ({
        ...provided,
        minHeight: height,
        height,
        border: error ? undefined : 0,
        borderColor: error && red,
        fontSize: '1.25rem',
      }),
      valueContainer: (provided) => ({
        ...provided,
        height,
        padding: '0 6px',
      }),
      input: (provided) => ({
        ...provided,
        margin: '0px',
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
        height,
      }),
    };

    const SelectComponent = () =>
      creatable ? (
        <CreatableSelect
          {...props}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          ref={ref as any}
          onCreateOption={(value) => {
            const newOption = { label: value, value };
            setAllOptions((options) => [...options, newOption]);

            setValue(value);
          }}
          onChange={(value) => {
            setValue(value?.value || null);
          }}
          value={allOptions.find((option) => option.value === value)}
          id={props.id || props.name}
          instanceId={props.id || props.name}
          placeholder={props.placeholder}
          theme={theme}
          styles={styles}
          options={allOptions}
          className="text-left"
        />
      ) : (
        <Select
          {...props}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          ref={ref as any}
          id={props.id || props.name}
          value={allOptions.find((option) => option.value === value)}
          instanceId={props.id || props.name}
          placeholder={props.placeholder}
          onChange={(value) => {
            setValue(value?.value || null);
          }}
          theme={theme}
          styles={styles}
          options={allOptions}
          className="text-left"
        />
      );

    return <SelectComponent />;
  }
);

export default SelectInput;
