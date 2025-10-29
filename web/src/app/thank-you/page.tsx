export default function ThankYou() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold">Заявка отправлена</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Мы свяжемся с вами в ближайшее время. Пока можете вернуться на главную.
      </p>
      <a href="/" className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black">На главную</a>
    </div>
  );
}





