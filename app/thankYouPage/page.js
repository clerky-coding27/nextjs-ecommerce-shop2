import Link from 'next/link';

export const metadata = {
  title: 'ThankYou',
  description: 'This is Claras e-commerce shop',
};

export default function ThankYouPage() {
  return (
    <div className="thankyoupage">
      <h1 className="h1">Thank you for your order!</h1>
      <Link
        href="/shoppage"
        data-test-id="checkout-confirm-order"
        className="NEEDSTOBEABUTTON"
      >
        <div className="buttonSecondary">
          <button className="cartbutton">Return to the Shop</button>
        </div>
      </Link>
    </div>
  );
}
