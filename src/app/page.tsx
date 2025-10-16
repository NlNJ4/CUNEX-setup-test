import Button from "@components/Button";
import TextField from "@components/TextField";
export default function Home() {
  return (
    <div className="bg-white min-h-screen space-y-2 "> 
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
      <TextField placeholder="type somthing..."/>
      <TextField supportingText="supporting text ..." placeholder="type somthing..."/>
      <TextField error supportingText="error ..." placeholder="type somthing..."/>
      <TextField endIcon={<span>icon</span>} placeholder="type somthing..."/>
    </div>
  );
}
