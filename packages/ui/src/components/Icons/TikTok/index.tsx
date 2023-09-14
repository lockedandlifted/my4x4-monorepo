type TikTokProps = {
  height: number,
  width: number,
  fillColor: string,
}
  
export const TikTok = (props: TikTokProps) => {
  const { fillColor, height, width } = props
    
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M18 8.37225C16.3929 8.40735 14.8929 7.91587 13.6071 7.00312V13.2871C13.6071 17.6753 8.75 20.4136 4.89286 18.237C1.03571 16.0253 1.03571 10.5488 4.89286 8.33714C6 7.70523 7.32143 7.45949 8.60714 7.63502V10.7946C6.64286 10.1626 4.75 11.8828 5.17857 13.8488C5.64286 15.8147 8.07143 16.587 9.60714 15.2179C10.1429 14.7264 10.4643 14.0243 10.4643 13.2871V1H13.6071C13.6071 1.28085 13.6071 1.52659 13.6786 1.80744C13.8929 2.96593 14.5714 3.984 15.6071 4.61591C16.2857 5.07229 17.1429 5.31803 18 5.31803V8.37225Z" 
        fill={fillColor}
      />
    </svg>
  )
}
  