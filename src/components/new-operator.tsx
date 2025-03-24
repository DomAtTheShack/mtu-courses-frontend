import {Button, AlertDialog, useDisclosure, AlertDialogOverlay, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';
import WrappedLink from './link';

export const NewOperator = observer(() => {
	const {isOpen, onClose} = useDisclosure({defaultIsOpen: true});

	return (
		<AlertDialog
			isOpen={isOpen}
			onClose={onClose}
			leastDestructiveRef={undefined}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
          Back up & Running
					</AlertDialogHeader>

					<AlertDialogBody>
						<p style={{marginBottom: '1rem'}}>
            With the shutdown of <WrappedLink href='http://www.MichiganTechCourses.com' display='inline-block'>Michigan Tech Courses</WrappedLink>
							from the original owner I though it would be best to bring it up and host it myself.
						</p>
						<p style={{marginBottom: '1rem'}}>
			With the reboot of the API, database, etc everything with the website should be working. Things to note: The pass fail drop stats are not up but soon to be up.
						</p>
						<p>
            Along with that the RateMyProfessor stats are not up yet too. Both should be out soon. Feel free to reach out with any questions at <WrappedLink href='mailto:dahann@mtu.edu' display='inline-block'>dahann@mtu.edu</WrappedLink>.
						</p>
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button onClick={onClose}>
            ok :)
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
});
