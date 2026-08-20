import { useState } from "react";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { toast } from "sonner";

export function LoanCalculatorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
    toast.success("Estimate saved! Our residence finance specialist will reach out to you.");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} label="Luxury Residence Loan Calculator">
      <div className="rounded-3xl border border-gold/30 bg-navy p-6 text-white sm:p-10 max-h-[85vh] overflow-y-auto">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="eyebrow text-gold font-bold">Buyer's Tool</p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-extrabold text-white">
              Residence EMI Calculator
            </h2>
          </div>
          <p className="text-xs font-light text-slate-300">
            Estimates powered by standard bank terms
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-light tracking-wider">
                <span className="uppercase text-slate-300 font-semibold">Property Value</span>
                <span className="font-display text-lg font-bold text-gold">
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
                className="mt-2 h-1.5 w-full accent-gold cursor-pointer bg-white/20 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-light tracking-wider">
                <span className="uppercase text-slate-300 font-semibold">
                  Down Payment ({downPaymentPercent}%)
                </span>
                <span className="font-display text-lg font-bold text-gold">
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
                className="mt-2 h-1.5 w-full accent-gold cursor-pointer bg-white/20 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="5"
                  max="15"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2 h-11 w-full rounded-xl border border-white/20 bg-navy/80 px-3 text-sm text-white outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  min="5"
                  max="30"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="mt-2 h-11 w-full rounded-xl border border-white/20 bg-navy/80 px-3 text-sm text-white outline-none focus:border-gold"
                />
              </div>
            </div>
          </div>

          {/* Breakdown & EMI Result */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <div>
              <p className="eyebrow text-gold font-bold">Estimated Monthly Outflow</p>
              <p className="mt-2 font-display text-4xl sm:text-5xl font-extrabold text-gold">
                ₹ {emi.toLocaleString("en-IN")}
                <span className="text-sm font-light text-slate-300"> / mo</span>
              </p>

              <div className="mt-6 space-y-3 divide-y divide-white/10 text-xs font-light">
                <div className="flex justify-between pt-2">
                  <span className="text-slate-300">Loan Principal</span>
                  <span className="font-semibold text-white">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-300">Total Interest Payable</span>
                  <span className="font-semibold text-white">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-300">Total Amount Payable</span>
                  <span className="font-bold text-gold">{formatCurrency(totalPayment)}</span>
                </div>
              </div>

              {/* Stacked bar visualization */}
              <div className="mt-6">
                <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                    className="bg-gold"
                  />
                  <div
                    style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                    className="bg-white/40"
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-400">
                  <span>■ Principal ({Math.round((loanAmount / totalPayment) * 100)}%)</span>
                  <span>■ Interest ({Math.round((totalInterest / totalPayment) * 100)}%)</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleEnquireWithEstimate}
              variant="solid"
              className="mt-8 w-full rounded-xl bg-gold text-navy font-bold hover:bg-gold-light transition-all"
            >
              Request Custom Structuring Plan
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
