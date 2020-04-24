import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      404 - <Link to="/">Go home</Link>
    </div>
  );
}
