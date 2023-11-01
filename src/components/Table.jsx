function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column, index) => (
    <th key={index}>{column.label}</th>
  ));

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column, index) => {
        return <td className="p-2" key={index}>{column.render(rowData)}</td>
    });

    return(
        <tr key={keyFn(rowData)} className="border-b">
            {renderedCells}
        </tr>
    )
  });

  return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
  );
}
export default Table;
