import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface userAvatarProps {
	src?: string,
	className?: string
}

export const UserAvatar = (
	{ src, className }: userAvatarProps
) => {
	return (
		<Avatar className={cn(
			"w-7 h-7 md:h-7 md:w-7",
			className
		)}>
			<AvatarImage src={src} />
		</Avatar>
	)
}