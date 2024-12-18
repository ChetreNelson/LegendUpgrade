const MLRating = () => {
  return (
    <div className="bg-primary w-full h-[100vh]">
      <div className="bg-blue-600">header</div>
      <div className="md:flex">
        <div className=" bg-purple-400 md:h-20">sidebar</div>
        <div className=" bg-green-500 md:h-96 md:flex-1 md:grid md:grid-cols-2">
          <div>div1</div>
          <div>div2</div>
        </div>
      </div>
      <div className="bg-purple-300 ">footer</div>
    </div>
  );
};

export default MLRating;
