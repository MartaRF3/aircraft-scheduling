import React from "react";
import { Box, RadioButtonGroup } from "grommet";
import { Ascend, Descend } from "grommet-icons";
import { useAppContext } from "../context/AppContext";
import { SortOption } from "../types/AppContextTypes";

type Props = {};

export const SortRadioButtons: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext();

  return (
    <Box responsive align="center" margin="medium">
      <RadioButtonGroup
        responsive
        name="radio"
        direction="row"
        gap="small"
        options={[
          {
            label: (
              <>
                Destination
                <Descend />
              </>
            ),
            value: SortOption.DestinationDESC,
          },
          {
            label: (
              <>
                Destination
                <Ascend />
              </>
            ),
            value: SortOption.DestinationASC,
          },
          {
            label: (
              <>
                Origin
                <Descend />
              </>
            ),
            value: SortOption.OriginDESC,
          },
          {
            label: (
              <>
                Origin
                <Ascend />
              </>
            ),
            value: SortOption.OriginASC,
          },
          {
            label: (
              <>
                Departure
                <Descend />
              </>
            ),
            value: SortOption.DepartureDESC,
          },
          {
            label: (
              <>
                Departure
                <Ascend />
              </>
            ),
            value: SortOption.DepartureASC,
          },
          {
            label: (
              <>
                Arrival
                <Descend />
              </>
            ),
            value: SortOption.ArrivalDESC,
          },
          {
            label: (
              <>
                Arrival
                <Ascend />
              </>
            ),
            value: SortOption.ArrivalASC,
          },
        ]}
        value={appContext.sort}
        onChange={(event) =>
          setAppContext({
            ...appContext,
            sort: SortOption[event.target.value as keyof typeof SortOption],
          })
        }
      />
    </Box>
  );
};
