function Spinner({ w = 4, h = 4 }) {
  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      <div className="flex min-h-screen items-start justify-center pt-[16rem]">
        <div
          style={{ width: `${w}rem`, height: `${h}rem` }}
          className={` animate-spin rounded-full border-4 border-[#FF742B] border-t-transparent`}
        ></div>
      </div>
    </div>
  );
}

export default Spinner;
