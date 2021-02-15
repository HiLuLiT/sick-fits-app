import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  a {
    margin: 1rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStyles>
  );
}
