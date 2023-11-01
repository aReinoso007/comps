function Table({ data }) {
  const tableHeader = data.map((item, index) => (
    <th key={index}>{item.name}</th>
  ));

  const renderedRows = data.map((item, index) => (
    <tr key={index} className="border-b">
      <td className="p-3">{item.name}</td>
      <td className="p-3">
        <div className={`p-3 m-3 ${item.color}`}></div>
      </td>
      <td className="p-3">{item.score}</td>
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {tableHeader}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
  );
}
export default Table;
