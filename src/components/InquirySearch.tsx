import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, RotateCcw } from 'lucide-react';
import { FilterState } from '../types';

interface InquirySearchProps {
  filterState: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onSearchSubmit: () => void;
  onResetFilters: () => void;
  matchCount: number;
}

export const InquirySearch: React.FC<InquirySearchProps> = ({
  filterState,
  onFilterChange,
  onSearchSubmit,
  onResetFilters,
  matchCount,
}) => {
  const categoryOptions = [
    { label: 'All Categories', value: 'All' },
    { label: 'Living Room', value: 'Living Room' },
    { label: 'Bedroom', value: 'Bedroom' },
    { label: 'Dining Room', value: 'Dining Room' },
    { label: 'Workspace', value: 'Workspace' },
    { label: 'Storage & Wardrobes', value: 'Storage' },
    { label: 'TV & Entertainment Units', value: 'TV Units' },
  ];

  const roomOptions = [
    { label: 'All Rooms', value: 'All' },
    { label: 'Living Room', value: 'Living Room' },
    { label: 'Bedroom', value: 'Bedroom' },
    { label: 'Dining Space', value: 'Dining' },
    { label: 'Home Office / Study', value: 'Home Office' },
    { label: 'Complete Home Furniture', value: 'Complete Home' },
  ];

  const budgetOptions = [
    { label: 'All Budgets', value: 'All' },
    { label: 'Under ₹10,000', value: 'under-10k' },
    { label: '₹10,000 – ₹25,000', value: '10k-25k' },
    { label: '₹25,000 – ₹50,000', value: '25k-50k' },
    { label: '₹50,000+', value: 'above-50k' },
  ];

  const isFiltered =
    filterState.category !== 'All' ||
    filterState.room !== 'All' ||
    filterState.budget !== 'All' ||
    filterState.searchQuery.trim() !== '';

  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        id="floating-inquiry-search-panel"
        className="rounded-3xl bg-[#141414]/95 border border-[#D8B77A]/25 p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
          {/* Category Dropdown */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="filter-category"
              className="text-[11px] font-semibold text-[#D8B77A] tracking-wider uppercase pl-1 flex items-center gap-1.5"
            >
              <span>Category</span>
            </label>
            <div className="relative">
              <select
                id="filter-category"
                value={filterState.category}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="w-full appearance-none rounded-2xl bg-[#1D1D1D] border border-white/10 hover:border-[#D8B77A]/50 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 pr-10 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all cursor-pointer"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1A1A1A] text-[#F4F0E8]">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#B7B3AC] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Room Dropdown */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="filter-room"
              className="text-[11px] font-semibold text-[#D8B77A] tracking-wider uppercase pl-1 flex items-center gap-1.5"
            >
              <span>Room</span>
            </label>
            <div className="relative">
              <select
                id="filter-room"
                value={filterState.room}
                onChange={(e) => onFilterChange('room', e.target.value)}
                className="w-full appearance-none rounded-2xl bg-[#1D1D1D] border border-white/10 hover:border-[#D8B77A]/50 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 pr-10 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all cursor-pointer"
              >
                {roomOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1A1A1A] text-[#F4F0E8]">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#B7B3AC] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Budget Dropdown */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="filter-budget"
              className="text-[11px] font-semibold text-[#D8B77A] tracking-wider uppercase pl-1 flex items-center gap-1.5"
            >
              <span>Budget Range</span>
            </label>
            <div className="relative">
              <select
                id="filter-budget"
                value={filterState.budget}
                onChange={(e) => onFilterChange('budget', e.target.value)}
                className="w-full appearance-none rounded-2xl bg-[#1D1D1D] border border-white/10 hover:border-[#D8B77A]/50 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 pr-10 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all cursor-pointer"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1A1A1A] text-[#F4F0E8]">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#B7B3AC] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Find Button & Reset */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="find-furniture-search-btn"
              onClick={onSearchSubmit}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#D8B77A]/15 focus:outline-none focus:ring-2 focus:ring-[#D8B77A]"
            >
              <Search className="w-4 h-4 text-[#0D0D0D]" />
              <span>Find Furniture</span>
            </button>

            {isFiltered && (
              <button
                type="button"
                id="reset-filter-btn"
                onClick={onResetFilters}
                className="p-3.5 rounded-2xl bg-[#222] border border-white/10 hover:border-[#D8B77A]/40 text-[#B7B3AC] hover:text-[#F4F0E8] transition-colors"
                title="Reset filters"
                aria-label="Reset search filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Match Count Indicator */}
        <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#B7B3AC] px-1">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D8B77A]" />
            <span>
              Showing <strong className="text-[#F4F0E8]">{matchCount}</strong> signature furniture models matching criteria
            </span>
          </div>
          <span className="hidden sm:inline text-[#B7B3AC]/70">
            Real-time Showroom Inventory
          </span>
        </div>
      </div>
    </div>
  );
};
