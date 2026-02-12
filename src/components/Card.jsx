import { StyledCard } from './styled/Card.styled'

const Card = ({item: { title, body, image}}) => {
  return (
    <StyledCard>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt={title}/>
        </div>    
    </StyledCard>
  )
}

export default Card