interface Props {
  progress: number
}

function LoadingComponent({ progress }: Props) {
  return (
    <div className="w-full h-[100dvh] flex-center">
      <div className="general-title">Loading {progress}</div>
    </div>
  )
}

export default LoadingComponent
