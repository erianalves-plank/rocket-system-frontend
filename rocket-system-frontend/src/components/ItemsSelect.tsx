import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS = ['Ashkinn', 'Carlton', 'Calypso', 'Kate'];

const ItemsSelected: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      placeholder="Selecte the crewmen for the crew"
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