import User from './User'

const About = () => {
    return (
        <div className='grid grid-flow-row-dense text-center flex-col'>
            <h1 className='font-bold  '> About</h1>
            <User />
        </div>
    )
}

export default About;