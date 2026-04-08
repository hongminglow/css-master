/**
 * Tailwind 4 Dark Theme Test Component
 *
 * This component demonstrates the Tailwind 4 dark theme configuration.
 * It can be removed once the main components are implemented.
 */

export function TailwindTest() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="font-heading text-4xl font-bold">
            Tailwind 4 Dark Theme Test
          </h1>
          <p className="text-slate-400 text-lg">
            Verifying the CSS Tricks Platform dark theme configuration
          </p>
        </header>

        {/* Color Palette */}
        <section className="bg-slate-800 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="font-heading text-2xl font-semibold">Color Palette</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-slate-900 rounded border border-slate-700"></div>
              <p className="text-sm text-slate-400">slate-900</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-slate-800 rounded border border-slate-700"></div>
              <p className="text-sm text-slate-400">slate-800</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-slate-700 rounded"></div>
              <p className="text-sm text-slate-400">slate-700</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-slate-600 rounded"></div>
              <p className="text-sm text-slate-400">slate-600</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-blue-600 rounded"></div>
              <p className="text-sm text-slate-400">blue-600</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="bg-slate-800 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="font-heading text-2xl font-semibold">Typography</h2>
          <div className="space-y-3">
            <p className="font-sans text-base">
              Body text using IBM Plex Sans (font-sans)
            </p>
            <p className="font-mono text-sm">
              Code text using JetBrains Mono (font-mono)
            </p>
            <p className="font-heading text-lg">
              Heading text using JetBrains Mono (font-heading)
            </p>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="bg-slate-800 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="font-heading text-2xl font-semibold">
            Interactive Elements
          </h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
              Primary Button
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-slate-50 px-4 py-2 rounded transition-colors duration-200">
              Secondary Button
            </button>
          </div>
        </section>

        {/* Code Block */}
        <section className="bg-slate-800 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="font-heading text-2xl font-semibold">Code Block</h2>
          <pre className="bg-slate-950 p-4 rounded overflow-x-auto">
            <code className="font-mono text-sm text-slate-300">
              {`// Example CSS Trick
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
            </code>
          </pre>
        </section>

        {/* Shadows */}
        <section className="bg-slate-800 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="font-heading text-2xl font-semibold">Shadow Depths</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-700 p-4 rounded shadow-sm">
              <p className="text-sm">shadow-sm</p>
            </div>
            <div className="bg-slate-700 p-4 rounded shadow-md">
              <p className="text-sm">shadow-md</p>
            </div>
            <div className="bg-slate-700 p-4 rounded shadow-lg">
              <p className="text-sm">shadow-lg</p>
            </div>
            <div className="bg-slate-700 p-4 rounded shadow-xl">
              <p className="text-sm">shadow-xl</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
