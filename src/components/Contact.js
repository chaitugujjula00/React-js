const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4"> Contact Us Page </h1>
      <form className="flex flex-col w-[20%]">
        <input type="text" className="m-4 p-2 rounded-lg border border-black" placeholder="name"/>
        <input type="text" className="m-4 p-2 rounded-lg border border-black" placeholder="message"/>
        <button className="m-4 py-2 font-semibold bg-blue-400 w-24 rounded-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
