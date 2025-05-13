import './page.scss';

export default function Home() {
  return (
    <div className="page-root">
      <textarea id="input" placeholder="Enter code here" />
      <textarea id="result" placeholder="Output" readOnly={true} />
      <button>Run</button>
    </div>
  );
}
