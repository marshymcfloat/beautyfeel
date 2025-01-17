type TopCustomerProps = {
  topCustomer: { _id: string; totalPaid: number }[];
};

export default function TopCustomer({ topCustomer }: TopCustomerProps) {
  console.log(topCustomer);
  return (
    <div className="my-4">
      <h1 className="text-center text-2xl text-customOffWhite">
        Top Customers
      </h1>

      <div className="w-[90%] my-4 h-[20vh] mx-auto bg-customOffWhite rounded-md">
        <ol>
          {topCustomer.map((customer, index) => (
            <li
              key={customer._id}
              className="flex justify-around border-b-2 border-customBlack shadow-md m-2 py-1"
            >
              <span>{index + 1}</span>
              <span>{customer._id}</span>
              <span>{customer.totalPaid}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
