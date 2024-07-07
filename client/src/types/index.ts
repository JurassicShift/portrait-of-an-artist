export let timerId: ReturnType<typeof setTimeout>;

export type nameState = React.ReactElement[] | [];

export interface AnimationObj {
    position: "absolute",
    top: string,
    left: string,
    fontSize: string,
    color?: string,
    opacity?: string,
    transition: string,
    letterSpacing: string,
    margin: string
}

export interface OpacityOn {
    opacity: string,
    transition?: string
}

export interface OpacityOff {
    opacity: string,
    transition: string
}

export interface TearDown {
    display: string
}