import React, { useEffect, useRef } from 'react';

const TextRotate = ({ dataRotate, period, className }) => {
 const elRef = useRef(null);
 const timeoutIdRef = useRef(null); // Store the timeout ID

 useEffect(() => {
    const TxtRotate = (el, toRotate, period) => {
      let loopNum = 0;
      let txt = '';
      let isDeleting = false;

      const tick = () => {
        let delta;
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        if (isDeleting) {
          txt = fullTxt.substring(0, txt.length - 1);
        } else {
          txt = fullTxt.substring(0, txt.length + 1);
        }

        el.innerHTML = '<span class="wrap ' + className + '">' + txt + '</span>';

        delta = 200 - Math.random() * 100;

        if (isDeleting) {
          delta /= 2;
        }

        if (!isDeleting && txt === fullTxt) {
          delta = period;
          isDeleting = true;
        } else if (isDeleting && txt === '') {
          isDeleting = false;
          loopNum++;
          delta = 100;
        }

        // Clear the previous timeout before setting a new one
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(tick, delta);
      };

      tick();
    };

    if (elRef.current) {
      const toRotate = JSON.parse(elRef.current.getAttribute('data-rotate'));
      const period = elRef.current.getAttribute('data-period');
      if (toRotate) {
        TxtRotate(elRef.current, toRotate, period);
      }
    }

    // Clear the timeout when the component unmounts
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
 }, [dataRotate, period, className]);

 return <span ref={elRef} data-rotate={JSON.stringify(dataRotate)} data-period={period}></span>;
};

export default TextRotate;
