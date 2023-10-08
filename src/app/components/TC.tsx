import * as React from 'react';

export default function TC(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width='1890'
      height='1344'
      viewBox='0 0 1890 1344'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient
          id='goldGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop offset='0%' style={{ stopColor: '#FFD700' }} />
          <stop offset='100%' style={{ stopColor: '#DAA520' }} />
        </linearGradient>
      </defs>
      <path
        d='M 471.989 468 V 747 L 709.007 639.944 V 351.5 M 471.989 469 L 237.007 351.6 M 471.989 468 L 709.007 351.5 M 471 464 V 735 L 237.007 874.444 M 468 741 L 237.007 352 L 0.9897 468 M 471 729 L 237.007 584.5 M 709.007 351.5 L 471.989 235.5 L 237.007 351.5 M 709.007 351.5 V 641.444 M 709.007 351.5 L 473 238 L 709.007 119 L 945.025 235 L 709.007 351.5 Z M 235 345 V 83 M 237.007 584.5 V 874.444 M 232 577 L 0.9897 468 M 237.007 874.444 L 0.9897 756.444 V 468 M 237 83 L 703 -138 L 709.007 118 L -4 472 L -3 205 Z M 1180.99 587 V 352 M 1180.99 352 L 945.025 236 L 941 469 M 1180.99 352 L 945.025 468.5 M 714 124 V 640.444 L 944 693 M 456 -22 L 465 226 M 941 467 V 701.5 M 1416.99 990.944 V 702.5 M 1416.99 702.5 L 1180.99 586.5 L 945.025 702.5 L 1180.99 819 M 1416.99 702.5 L 1180.99 819 M 1416.99 702.5 V 992.444 M 1416.99 702.5 L 1180.99 586 L 1178 351 L 1653 586 L 1416.99 702.5 Z M 1180.99 819 L 944 699 L 474 741 M 1416 985 L 945.025 935.5 M 945.025 935.5 V 1225.44 L 546 985 V 744 M 945.025 935.5 L 553 990 M 1180.99 1052.5 V 1342.44 M 1180.99 1052.5 L 945.025 936 M 548 747 L 1188 818 M 1180.99 1342.44 L 1416.99 1224.44 V 994 M 1180.99 1342.44 L 239 976 V 878 M 1884 987 L 1661 817 L 1194 824 M 1653 819.5 V 1109.44 M 1653 819.5 L 1416.99 703 M 1659 808 L 1889 703 M 1653 1109.44 L 1889 991.444 V 703 M 1657 1117 L 1416.99 991.444 V 703 M 1889 703 L 1653 587 L 1416.99 703'
        stroke='url(#goldGradient)' 
        strokeWidth='2'
      />
    </svg>
  );
}
