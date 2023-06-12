import './App.css';
import { UserContext, UserContextProvider } from './Authentication/UserContextProvider';
import { UserShower } from './Authentication/UserShower';
import { AuthenticationManager } from './Components/ComponentFromComponent/AuthenticationManager';
import { Profile } from './Components/ComponentFromComponent/Profile';
import { CustomButton } from './Components/CustomButton';
import { CustomButtonWithOmition } from './Components/CustomButtonWithOmition';
import { CustomButtonWithOmitionWithExtractionOfPropsFromAnotherComponent } from './Components/CustomButtonWithOmitionWithExtractionOfPropsFromAnotherComponent';
import { Listable } from './Components/Generics/Listable';
import { InputRef } from './Components/InputFocusReference';
import { InputOne } from './Components/MyClick';
import { Welcome } from './Components/MyFirst';
import { MyFirstCounter } from './Components/MyFirstClass';
import { Counter } from './Components/MyFirstCounter';
import { PersonList } from './Components/MyList';
import { UserHandler } from './Components/MyLogin';
import { UserHandler2 } from './Components/MyLogin2';
import { Wrap } from './Components/MyWrapper';
import { InformalText } from './Components/Polymorphic/InformalText';
import { Toast } from './Components/PositionWithLiteral/Toast';
import { NumberShower } from './Components/RestrictionWithNever/NumberShower';
import { TimerOne } from './Components/Timer';
import { CallingApi } from './Hooks/CallingApi';
import CounterPlusOne from './Hooks/Effecto';
import MouseEventHolder from './Hooks/MouseEventHolder';
import { ThemeContextProvider } from './Theme/ThemeContext';
import { WrappedInContext } from './Theme/WrappedInContext';

const persons = [
    {
        name: "Sa",
        surname: "Co"
    },
    {
        name: "Sa2",
        surname: "Co2"
    },
    {
        name: "Sa3",
        surname: "Co3"
    }
];

const listableThings = [
    {
        id: 32,
        label: "ciottolo",
        somethingelse: "das"
    },
    {
        id: 35,
        label: "ciottolo35",
        somethingelse: "dasAdkl"
    }
]

function App() {

    return (
        <div className="App">
            <Welcome name="Say hi!!"></Welcome>
            <PersonList names={persons}></PersonList>
            <Wrap value='green'>
                <div>I'm in green</div>
            </Wrap>
            <InputOne value="Storytelling"></InputOne>
            <UserHandler></UserHandler>
            <UserHandler2></UserHandler2>
            <Counter></Counter>
            <ThemeContextProvider>
                <div>I'm pretty sure you are right but not now</div>
                <WrappedInContext></WrappedInContext>
            </ThemeContextProvider>
            <UserContextProvider>
                <UserShower />
            </UserContextProvider>
            <TimerOne></TimerOne>
            <InputRef></InputRef>
            <MyFirstCounter message="the value is "></MyFirstCounter>
            <AuthenticationManager isLoggedIn={true} Component={Profile}></AuthenticationManager>
            <Listable items={listableThings} onClick={(x) => console.log(x.somethingelse)}></Listable>
            <NumberShower value={100} isPositive />
            <Toast position={'center'}></Toast>
            <CustomButton message={"ciaone"} onClick={() => console.log("clicked")}>
                <div>something more</div>
            </CustomButton>
            <CustomButtonWithOmition message={'ciaone2'} onClick={() => console.log("clicked 2")} children={"children"} />
            <CustomButtonWithOmitionWithExtractionOfPropsFromAnotherComponent message={"ciaone4"} onClick={() => console.log('clicked 4')} children={"cadsadas"} ></CustomButtonWithOmitionWithExtractionOfPropsFromAnotherComponent>
            <InformalText asElement="h1" size="lg">
                Heading
            </InformalText>
            <InformalText asElement="p" size="md">
                Paragraph
            </InformalText>
            <InformalText asElement="label" htmlFor="someId" size="sm" color="secondary">
                Label
            </InformalText>
            <CounterPlusOne></CounterPlusOne>
            <MouseEventHolder></MouseEventHolder>
            <CallingApi></CallingApi>
        </div>
    );
}

export default App;
