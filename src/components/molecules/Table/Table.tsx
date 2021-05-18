import EdiableSpan from "../EditableSpan";

const Table = ({ tableData, editable }: any) => {
  const { legend, records } = tableData;
  return (
    <table className="table-fixed">
      {legend?.length > 0 && (
        <thead className="text-sm font-semibold">
          <tr>
            {legend.map((item: string) => (
              <th className="w-1/5 py-2 text-left">{item}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="text-sm border-t">
        {records.map(({ fields }: any) => (
          <tr>
            {fields.map((field: string) => (
              <td className="py-1.5 max-w-1/2">
                <EdiableSpan
                  editable={editable}
                  className="font-light truncate"
                >
                  {field}
                </EdiableSpan>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
