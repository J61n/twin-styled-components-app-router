import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="h-screen grid place-content-center">
      <div className="bg-white text-zinc-800 w-96 p-6 rounded-lg">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold tracking-tighter border-b">
            Example with modifiers
          </h1>
          <p>
            These buttons demonstrate how classes with modifiers are not applied
            properly.
          </p>
          <div className="flex flex-col gap-5">
            <button
              className="
                bg-blue-500 text-blue-50 hover:bg-blue-400 active:bg-blue-600
                border border-blue-600 hover:border-blue-500
                font-medium text-lg
                px-5 py-2
                rounded shadow
              "
            >
              Styled with <code>className</code>
            </button>
            <Button>
              Styled with <code>Styled Components</code>
            </Button>
          </div>
          <p>
            When hovering or clicking the upper button, it behaves as expected.
            But when hovering/clicking the lower button, the expected change of
            the background color only occurs on the nested code element.
          </p>
        </div>
      </div>
    </main>
  );
}
