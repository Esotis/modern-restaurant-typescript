function FooterLayout() {
  return (
    <div className=" absolute top-0 left-0 z-0 h-full w-full">
      {/* layout black 25% */}
      <div className=" h-1/4 w-full bg-black" />
      <div className=" h-3/4 w-full bg-main bg-cover bg-fixed bg-center bg-repeat" />
    </div>
  );
}

export default FooterLayout;
