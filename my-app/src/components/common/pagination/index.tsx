type Props = {
  onPrevious?: () => void;
  onNext?: () => void;
  isLastStep?: boolean;
};

export default function PaginationComponent({
  onPrevious,
  onNext,
  isLastStep,
}: Props) {
  return (
    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!onPrevious}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Previous
      </button>

      <button
        type={isLastStep ? "button" : "submit"}
        onClick={isLastStep ? onNext : undefined}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isLastStep ? "Submit" : "Next"}
      </button>
    </div>
  );
}
