import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

type PropsComponent = {
  options: string[];
  itemsAlreadySelected?: string[];
  handleReturnSelectedValues: (valuesSelected: string[]) => void;
};

const ItemsSelected: React.FC<PropsComponent> = ({
  options,
  itemsAlreadySelected = [],
  handleReturnSelectedValues,
}) => {
  const [selectedItems, setSelectedItems] =
    useState<string[]>(itemsAlreadySelected);
  useEffect(() => {
    console.log('Selected Items:', selectedItems);
  }, [selectedItems]);
  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  /*   console.log('Options:', options);
    console.log('Filtered Options:', filteredOptions); */

  const handleChange = (values: string[]) => {
    console.log('Selected Values:', values);
    setSelectedItems(values);
    handleReturnSelectedValues(values);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Select the crewmen for the crew"
      value={selectedItems}
      onChange={handleChange}
      style={{ width: '100%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default ItemsSelected;
