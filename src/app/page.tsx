import Button from "@components/Button";
import GroupFilterButton from "@components/GroupFilterButton";
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
      <TextField placeholder="Placeholder" />
      <TextField supportingText="supporting text ..." placeholder="Placeholder" />
      <TextField error supportingText="error ..." placeholder="Placeholder" />
      <TextField endButton={<Button mode="filled" bordered="square" expanded={false} className="rounded-l-none">Button</Button>} placeholder="Placeholder" />
      <GroupFilterButton
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value="option1"
      /> 

    </div>
  );
}
