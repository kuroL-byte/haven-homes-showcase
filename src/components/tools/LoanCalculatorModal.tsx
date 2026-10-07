import { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { toast } from "sonner";

export function LoanCalculator({ onComplete }: { onComplete?: () => void }) {
  const [propertyPrice, setPropertyPrice] = useState<number>(35000000); // 3.5 Cr default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const months = tenureYears * 12;

  const emi =
    loanAmount && monthlyRate && months
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1),
        )
      : 0;

  const totalPayment = emi * months;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString("en-IN")}`;
  };

  const handleEnquireWithEstimate = () => {
    toast.success("Estimate saved! Our residence finance specialist will reach out with payment schedules.");
    if (onComplete) onComplete();
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-black/25 backdrop-blur-[2px] p-5 sm:p-7 shadow-xl text-white">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between border-b border-white/10 pb-4">
        <div>
          <span className="eyebrow text-amber-300 font-bold text-[10px]">Investment Planning</span>
          <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white drop-shadow-sm">
            Residence Mortgage &amp; EMI Calculator
          </h3>
        </div>
        <p className="text-xs font-semibold text-amber-300/90">
          ✦ Real-time banking rate estimates
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium tracking-wider">
              <span className="uppercase text-slate-100 font-bold text-[10px]">Property Investment Value</span>
              <span className="font-display text-sm sm:text-base font-bold text-amber-300">
                {formatCurrency(propertyPrice)}
              </span>
            </div>
            <input
              type="range"
              min={10000000}
              max={200000000}
              step={2500000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="mt-2 h-2 w-full accent-amber-400 cursor-pointer bg-black/50 rounded-lg border border-white/10"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium tracking-wider">
              <span className="uppercase text-slate-100 font-bold text-[10px]">
                Down Payment ({downPaymentPercent}%)
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-amber-300">
                {formatCurrency(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="mt-2 h-2 w-full accent-amber-400 cursor-pointer bg-black/50 rounded-lg border border-white/10"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step="0.1"
                min="5"
                max="15"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="h-10 w-full rounded-xl border border-white/15 bg-black/25 px-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-amber-400 focus:bg-black/35 focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                Tenure (Years)
              </label>
              <input
                type="number"
                min="5"
                max="30"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="h-10 w-full rounded-xl border border-white/15 bg-black/25 px-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-amber-400 focus:bg-black/35 focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Breakdown & EMI Result */}
        <div className="flex flex-col justify-between rounded-xl border border-white/15 bg-black/25 backdrop-blur-[2px] p-5 sm:p-6 shadow-md">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-amber-300">Estimated Monthly EMI</p>
            <p className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white drop-shadow">
              ₹ {emi.toLocaleString("en-IN")}
              <span className="text-xs font-semibold text-amber-300"> / month</span>
            </p>

            <div className="mt-4 space-y-2.5 divide-y divide-white/10 text-xs">
              <div className="flex justify-between pt-1.5">
                <span className="text-slate-100 font-medium">Net Loan Principal</span>
                <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-slate-100 font-medium">Total Interest Payable</span>
                <span className="font-bold text-white">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-slate-100 font-medium">Total Outflow</span>
                <span className="font-extrabold text-amber-300">{formatCurrency(totalPayment)}</span>
              </div>
            </div>

            {/* Stacked bar visualization */}
            <div className="mt-4">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/10 border border-white/10">
                <div
                  style={{ width: `${totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 50}%` }}
                  className="bg-gradient-to-r from-amber-400 to-amber-300"
                />
                <div
                  style={{ width: `${totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50}%` }}
                  className="bg-slate-500"
                />
              </div>
              <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-slate-100 font-bold">
                <span className="text-amber-300">■ Principal ({totalPayment > 0 ? Math.round((loanAmount / totalPayment) * 100) : 0}%)</span>
                <span>■ Interest ({totalPayment > 0 ? Math.round((totalInterest / totalPayment) * 100) : 0}%)</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleEnquireWithEstimate}
            variant="solid"
            size="sm"
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fce79a] to-[#c59b27] py-3 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-md transition-all hover:scale-[1.01]"
          >
            Request Custom Financial Structure
          </Button>
        </div>
      </div>
    </div>
  );
}

export function LoanCalculatorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} label="Luxury Residence Loan Calculator">
      <LoanCalculator onComplete={onClose} />
    </Modal>
  );
}
