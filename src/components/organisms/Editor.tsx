import { Button } from '@/components/atoms/Button';
import { Hr } from '@/components/atoms/Hr';
import { LogoIcon } from '@/components/atoms/icons/LogoIcon';
import { ResetIcon } from '@/components/atoms/icons/ResetIcon';

export const Editor = () => {
	const elko = '';
	return (
		<>
			<div className="flex w-full flex-col gap-8">
				<div className="flex flex-col items-center justify-between sm:flex-row">
					<div className="flex flex-col items-center gap-3 sm:flex-row">
						<LogoIcon size={64} className="text-primary" />
						<h1 className="text-display">Canvas Editor</h1>
					</div>
					<div className="mt-3 sm:mt-0">
						<Button
							variant="danger"
							label="Reset"
							onClick={() => console.log('Reset')}
							Icon={<ResetIcon />}
						/>
					</div>
				</div>
				<Hr />
			</div>
			<div className="flex flex-wrap gap-8"></div>
		</>
	);
};
