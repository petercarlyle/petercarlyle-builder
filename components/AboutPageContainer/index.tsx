import AboutImage from '@/components/AboutImage';
import AboutText from '@/components/AboutText';
import SocialIconsList from '@/components/SocialIconsList';

export default function AboutPageContainer(props: any) {
  return (
    <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
      <AboutImage portrateImage={props.portrateImage} altText={props.altText} />
      <AboutText title={props.Title} text={props.text}></AboutText>
      <SocialIconsList></SocialIconsList>
    </div>
  );
}
