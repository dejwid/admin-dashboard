export default function WelcomeRow() {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-primary text-xl">Welcome, <b>Dawid</b></h1>
      </div>
      <div className="">
        <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
          <img className="h-8" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
          <span className="px-3">Dawid</span>
        </div>
      </div>
    </div>
  );
}