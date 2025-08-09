const SkeletonTableRow = () => {
  return (
    <tbody>
      <tr className="animate-pulse">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12 bg-gray-300"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-20 opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </td>
        <td>
          <div className="h-4 bg-gray-300 rounded w-12"></div>
        </td>
        <th>
          <div className="h-6 bg-gray-300 rounded w-14"></div>
        </th>
        <th>
          <div className="h-6 bg-gray-300 rounded w-14"></div>
        </th>
      </tr>
    </tbody>
  );
};

export default SkeletonTableRow;