import { useMantineColorScheme, Button, Group } from '@mantine/core';


const SchemeBtn = () => {
    const { setColorScheme } = useMantineColorScheme();

    return (
        <Group>
            <Button onClick={() => setColorScheme('light')}>Light</Button>
            <Button onClick={() => setColorScheme("dark")}>dark</Button>
        </Group>
    );
}

export default SchemeBtn;