import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-4">
        <Card title="Fast Styling" description="Tailwind allows you to style elements quickly and efficiently." />
        <Card title="Responsive" description="Your app looks great on all screen sizes." />
        <Card title="Customizable" description="Easily extend and customize with Tailwind configuration." />
      </div>
    </div>
  );
}

