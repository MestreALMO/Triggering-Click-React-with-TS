import React, { useRef } from 'react';

const Header: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <p>Hover over the checkbox to simulate a mouse-click.</p>
      <form>
        <input
          type="checkbox"
          id="myCheck"
          className="btn"
          ref={inputRef}
          onClick={() => alert('click event occured')}
          onMouseOver={() => inputRef?.current?.click()}
          onFocus={this}
        />
        <input type="checkbox" id="myCheck2" onClick={() => alert('check2')} />
      </form>
    </>
  );
};

export default Header;
