export default function basicpage() {

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="bg-amber-200 w-[100%]">헤더</header>
      <div className="bg-primary w-dvw h-48 border-red-500">메인</div>
      <footer className="bg-amber-200 w-[100%]">푸터</footer>
    </div>
  );
}