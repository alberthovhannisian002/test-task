import {useEffect, useState} from "react";


const usePersistState = () => {
    interface IState {
        song_name: string,
        volume: number,
        analytics: boolean
    }
    const InitialState: IState = localStorage.getItem('store') ?  JSON.parse(localStorage.getItem('store') || '') : {
        song_name: '',
        volume: 0,
        analytics: false,
    };
    const [state, setState] = useState<IState>(InitialState)

    const { song_name, volume, analytics } = state
    //  [state, setState] usePersistState

    // const [settings, setSettings] = usePersistState({
    // volume: 1,
    // currentSong: 'test',
    // analyticsOn: false
    // })

    // useSettingsContext()
    const onChangeValue = (e: any) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        setState(prevState => ({...prevState, [name]: value}))
    }

    useEffect(() => {
        // @ts-ignore
        const persistedState = JSON.parse(localStorage.getItem('store'))
        if (song_name === '') {
            setState(prevState => ({...prevState, ...persistedState}))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(state))
    }, [song_name, volume, analytics])

    return  {state, onChangeValue}
}

export default usePersistState
