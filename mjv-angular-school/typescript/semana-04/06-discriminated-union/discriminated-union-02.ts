type BasicState = {
    people? :string[];
    errorMessage?: string;
}

type SuccessState = {
    success: true,
    people: string[]
}

type FailState = {
    success: false,
    erroMessage: string
}

type RequestState = SuccessState | FailState;

function checkResult(requestState: RequestState){
    if(requestState.success){
        console.log(requestState.people);
    }else{
        console.log(requestState.erroMessage);
    }
}