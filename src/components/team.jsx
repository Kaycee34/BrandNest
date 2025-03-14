import cmo from '../assets/CMO.jpg'
import copywriter from '../assets/copywriter.jpg'
import founder from '../assets/founder.jpg'
import designer from '../assets/graphics-designer.jpg'
import kaycee from '../assets/kaycee.jpg'

function Team() {
  const teamMembers = [
    {
      name: 'Chukwuebuka Chukwu',
      role: 'Founder',
      image: founder,
    },
    {
      name: 'Justice Chibundo Nwafor ',
      role: 'Creative Director',
      image: designer,
    },
    {
      name: 'Rita Akoke',
      role: 'CMO',
      image: cmo,
    },
    {
      name: 'kaycee',
      role: 'Web Developer',
      image: kaycee,
    },
    {
      name: 'Chiamaka Okpara',
      role: 'Email Marketer/ Copywriter',
      image: copywriter,
    },
  ]

  return (
    <div className='p-4'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-6'>
        Meet Our Team
      </h2>
      <div className='grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:gap-6'>
        {' '}
        {/*Force grid on small screens*/}
        {teamMembers.map((member, index) => (
          <div key={index} className='text-center w-full md:w-1/3 lg:w-1/4'>
            <img
              src={member.image}
              alt={member.role}
              className='w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover mb-2 mx-auto'
            />
            <h3 className='text-lg font-semibold'>{member.role}</h3>
            <p className='text-sm text-gray-600'>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
