import React, { useState } from 'react';
import { Select } from 'antd';

type PropsComponent = {
  options: string[];
}

const ItemsSelected: React.FC<PropsComponent> = ({options}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      placeholder="Select the crewmen for the crew"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '100%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default ItemsSelected;