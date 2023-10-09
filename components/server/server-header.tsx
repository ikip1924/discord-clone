"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from "lucide-react"

import { ServerWithMembersWithProfiles } from "@/types"
import { MemberRole } from "@prisma/client"


interface ServerHeaderProps {
	server: ServerWithMembersWithProfiles
	role?: MemberRole
}

export const ServerHeader = ({
	server, role
}: ServerHeaderProps) => {
	const isAdmin = role === MemberRole.ADMIN;
	const isModerator = isAdmin || role === MemberRole.MODERATOR;


	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger
					className="focus:outline-none"
					asChild
				>
					<button
						className="flex items-center w-full h-12 px-3 font-semibold transition border-b-2 text-md border-neutral-200 dark:border-neutral-800 hover:bg-zinc-700/10 dark:hover:bg-zinc-500"
					>
						{server.name}
						<ChevronDown className="w-5 h-5 ml-auto" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
				>
					{isModerator && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm text-indigo-600 cursor-pointer dark:text-indigo-400"
						>
							Invite People
							<UserPlus className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
					{isAdmin && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm cursor-pointer"
						>
							Server Setting
							<Settings className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
					{isAdmin && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm cursor-pointer"
						>
							Manage Member
							<Users className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
					{isModerator && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm cursor-pointer"
						>
							Create Channel
							<PlusCircle className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
					{isModerator && (
						<DropdownMenuSeparator />
					)}
					{isAdmin && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm cursor-pointer text-rose-500"
						>
							Delete Server
							<Trash className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
					{!isAdmin && (
						<DropdownMenuItem
							className="px-3 py-2 text-sm cursor-pointer text-rose-500"
						>
							Leave Server
							<LogOut className="w-4 h-4 ml-auto" />
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}