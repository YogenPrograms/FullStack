import { useRef, useState } from 'react';

export default function F3() {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState('');

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <h2>Updated: {updated}</h2>

      <button onClick={handleClick}>Update</button>
    </div>
  );
}