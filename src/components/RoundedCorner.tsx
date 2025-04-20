export const RoundedCorner = () => {
  return (
    <svg className="invisible absolute -z-0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rounded_corner_filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"
            result="matrix"
          />
          <feComposite in="SourceGraphic" in2="matrix" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};