import React, { useState, useCallback } from "react";
import {
  Search,
  ShieldCheck,
  Linkedin,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { DEMO_INTERNS } from "./constants";
import type { Intern, SearchStatus } from "./types";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [result, setResult] = useState<Intern | null>(null);

  const [searchVal, setSearchVal] = useState(searchTerm);
  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (!searchTerm.trim()) return;

      setStatus("searching");

      // Simulate API delay
      setTimeout(() => {
        const term = searchTerm.toLowerCase().trim();
        const intern = DEMO_INTERNS.find(
          (i) =>
            i.id.toLowerCase() === term ||
            i.email.toLowerCase() === term ||
            i.name.toLowerCase().includes(term)
        );

        if (intern) {
          setResult(intern);
          setStatus("found");
        } else {
          setResult(null);
          setStatus("not_found");
          setSearchVal(searchTerm);
        }
      }, 600);
    },
    [searchTerm]
  );

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Hero Section & Search Bar */}
      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from),_transparent)] from-primary/5">
        <div className="w-full max-w-3xl text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Verify <span className="gradient-text">Internship</span>{" "}
              Credentials
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto">
              Confirm the validity of Leafclutch certificates. Just enter the
              ID, email, or name below.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="relative group max-w-2xl mx-auto mt-8"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ">
              <Search
                className={`w-5 h-5 transition-colors ${
                  status === "searching"
                    ? "text-primary animate-pulse"
                    : "text-muted-foreground"
                }`}
              />
            </div>
            <input
              type="text"
              className=" w-full py-4 pl-12 pr-32 text-lg rounded-lg shadow-xl
                            bg-background text-foreground
                            border border-input
                            placeholder:text-muted-foreground
                            focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring
                            transition-colors"
              placeholder="Enter ID, email, or full name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              disabled={status === "searching"}
              className="absolute right-2 inset-y-2 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
            >
              {status === "searching" ? "Verifying..." : "Verify"}
            </button>
          </form>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Official Verification</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Global Standards</span>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <section className="mt-16 w-full max-w-2xl mx-auto min-h-[400px]">
          {status === "found" && result && (
            <div
              className="
      animate-fade-in
      p-6 sm:p-8
      flex flex-col md:flex-row gap-8
      items-center md:items-start
      bg-card text-foreground
      border border-border
      rounded-3xl
      shadow-lg
    "
            >
              {/* Left side */}
              <div className="flex flex-col items-center gap-5 shrink-0">
                <div className="relative group">
                  <div
                    className="
            absolute -inset-1 rounded-full blur opacity-25
            bg-primary/40
            group-hover:opacity-50 transition duration-1000
          "
                  ></div>
                  <img
                    src={result.photo}
                    alt={result.name}
                    className="
              relative w-32 h-32 sm:w-40 sm:h-40
              rounded-full object-cover
              border-4 border-card
              bg-muted
            "
                  />
                </div>

                {/* Verified Badge */}
                <div
                  className="
          flex items-center justify-center p-2.5 rounded-full
          bg-success/10 border border-success/20
          text-success shadow-sm
          transition-transform hover:scale-110
        "
                >
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>

              {/* Right side */}
              <div className="flex-grow space-y-4 w-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      Verified Intern
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {result.id}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {result.name}
                  </h2>

                  <p className="text-muted-foreground font-medium">
                    {result.post}
                  </p>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/60">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      Joining Date
                    </p>
                    <p className="font-semibold text-sm">
                      {result.joiningDate}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      Ending Date
                    </p>
                    <p className="font-semibold text-sm">
                      {result.endingDate || "Present"}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={result.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              flex-1 flex items-center justify-center gap-2
              bg-[#0077b5] text-white
              py-2 px-4 rounded-lg font-semibold
              hover:brightness-110
              transition-all active:scale-95
            "
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>

                  {result.endingDate &&
                    result.endingDate.toLowerCase() !== "present" && (
                      <button
                        className="
                flex-1 flex items-center justify-center gap-2
                border border-border
                py-2 px-4 rounded-lg font-semibold
                bg-background text-foreground
                hover:bg-muted
                transition-all active:scale-95
              "
                      >
                        Download Certificate
                      </button>
                    )}
                </div>
              </div>
            </div>
          )}

          {status === "not_found" && (
            <div className="animate-fade-in flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-3xl bg-card/30">
              <div className="bg-destructive/10 p-4 rounded-full mb-4">
                <AlertCircle className="w-12 h-12 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificate Not Found</h3>
              <p className="text-muted-foreground max-w-sm">
                We couldn't find any record matching "
                <span className="text-foreground font-semibold">
                  {searchVal}
                </span>
                ". Please double-check the ID, name, or email and try again.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatus("idle");
                }}
                className="mt-6 text-primary font-semibold hover:underline flex items-center gap-1"
              >
                Clear search and try again <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {status === "idle" && (
            <div className="flex flex-col items-center justify-center text-center opacity-40">
              <div className="p-8 rounded-full border-2 border-dashed border-border mb-4">
                <Search className="w-16 h-16" />
              </div>
              <p className="text-lg">Waiting for your search...</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
