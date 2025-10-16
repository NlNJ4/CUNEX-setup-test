import Button from "@components/Button";
export default function Home() {
  return (
    <div className="bg-white min-h-screen space-y-2"> 
      <Button mode="filled" bordered="round" expanded={false}>
        Label
      </Button>
      <Button mode="outline" bordered="round" expanded={false}>
        Label
      </Button>
      <Button mode="filled" bordered="square" expanded={false}>
        Label
      </Button>
      <Button mode="outline" bordered="square" expanded={false}>
        Label
      </Button>
      <Button mode="filled" bordered="round" expanded={true}>
        Label
      </Button>
      <Button mode="outline" bordered="round" expanded={true}>
        Label
      </Button>
    </div>
  );
}
