type ItemType = {
  title: string;
  value: any;
};

type SelectType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select = (props: SelectType) => {
  return (
    <>
      <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
        {props.items.map((i, index) => (
          <option value={i.value} key={index}>
            {i.title}
          </option>
        ))}
      </select>
    </>
  );
};
